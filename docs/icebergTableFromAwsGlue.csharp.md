# `icebergTableFromAwsGlue` Submodule <a name="`icebergTableFromAwsGlue` Submodule" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromAwsGlue <a name="IcebergTableFromAwsGlue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue snowflake_iceberg_table_from_aws_glue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlue(Construct Scope, string Id, IcebergTableFromAwsGlueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig">IcebergTableFromAwsGlueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig">IcebergTableFromAwsGlueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetAutoRefresh">ResetAutoRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalogNamespace">ResetCatalogNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts"></a>

```csharp
private void PutTimeouts(IcebergTableFromAwsGlueTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

---

##### `ResetAutoRefresh` <a name="ResetAutoRefresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetAutoRefresh"></a>

```csharp
private void ResetAutoRefresh()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetCatalogNamespace` <a name="ResetCatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalogNamespace"></a>

```csharp
private void ResetCatalogNamespace()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetExternalVolume"></a>

```csharp
private void ResetExternalVolume()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetReplaceInvalidCharacters"></a>

```csharp
private void ResetReplaceInvalidCharacters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IcebergTableFromAwsGlue resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IcebergTableFromAwsGlue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IcebergTableFromAwsGlue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IcebergTableFromAwsGlue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IcebergTableFromAwsGlue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IcebergTableFromAwsGlue resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IcebergTableFromAwsGlue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IcebergTableFromAwsGlue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromAwsGlue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList">IcebergTableFromAwsGlueDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList">IcebergTableFromAwsGlueParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList">IcebergTableFromAwsGlueShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference">IcebergTableFromAwsGlueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefreshInput">AutoRefreshInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespaceInput">CatalogNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableNameInput">CatalogTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefresh">AutoRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespace">CatalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableName">CatalogTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.describeOutput"></a>

```csharp
public IcebergTableFromAwsGlueDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList">IcebergTableFromAwsGlueDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.parameters"></a>

```csharp
public IcebergTableFromAwsGlueParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList">IcebergTableFromAwsGlueParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.showOutput"></a>

```csharp
public IcebergTableFromAwsGlueShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList">IcebergTableFromAwsGlueShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeouts"></a>

```csharp
public IcebergTableFromAwsGlueTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference">IcebergTableFromAwsGlueTimeoutsOutputReference</a>

---

##### `AutoRefreshInput`<sup>Optional</sup> <a name="AutoRefreshInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefreshInput"></a>

```csharp
public string AutoRefreshInput { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `CatalogNamespaceInput`<sup>Optional</sup> <a name="CatalogNamespaceInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespaceInput"></a>

```csharp
public string CatalogNamespaceInput { get; }
```

- *Type:* string

---

##### `CatalogTableNameInput`<sup>Optional</sup> <a name="CatalogTableNameInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableNameInput"></a>

```csharp
public string CatalogTableNameInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolumeInput"></a>

```csharp
public string ExternalVolumeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharactersInput"></a>

```csharp
public bool|IResolvable ReplaceInvalidCharactersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeoutsInput"></a>

```csharp
public IResolvable|IcebergTableFromAwsGlueTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

---

##### `AutoRefresh`<sup>Required</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefresh"></a>

```csharp
public string AutoRefresh { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespace"></a>

```csharp
public string CatalogNamespace { get; }
```

- *Type:* string

---

##### `CatalogTableName`<sup>Required</sup> <a name="CatalogTableName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableName"></a>

```csharp
public string CatalogTableName { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharacters"></a>

```csharp
public bool|IResolvable ReplaceInvalidCharacters { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromAwsGlueConfig <a name="IcebergTableFromAwsGlueConfig" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CatalogTableName,
    string Database,
    string Name,
    string Schema,
    string AutoRefresh = null,
    string Catalog = null,
    string CatalogNamespace = null,
    string Comment = null,
    string ExternalVolume = null,
    string Id = null,
    bool|IResolvable ReplaceInvalidCharacters = null,
    IcebergTableFromAwsGlueTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogTableName">CatalogTableName</a></code> | <code>string</code> | Specifies the name of the table as it appears in the AWS Glue catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.autoRefresh">AutoRefresh</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the AWS Glue catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalog">Catalog</a></code> | <code>string</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogNamespace">CatalogNamespace</a></code> | <code>string</code> | Specifies the namespace (or database) in the AWS Glue catalog that the table belongs to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#id IcebergTableFromAwsGlue#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CatalogTableName`<sup>Required</sup> <a name="CatalogTableName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogTableName"></a>

```csharp
public string CatalogTableName { get; set; }
```

- *Type:* string

Specifies the name of the table as it appears in the AWS Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#catalog_table_name IcebergTableFromAwsGlue#catalog_table_name}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#database IcebergTableFromAwsGlue#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#name IcebergTableFromAwsGlue#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#schema IcebergTableFromAwsGlue#schema}

---

##### `AutoRefresh`<sup>Optional</sup> <a name="AutoRefresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.autoRefresh"></a>

```csharp
public string AutoRefresh { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the AWS Glue catalog.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#auto_refresh IcebergTableFromAwsGlue#auto_refresh}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#catalog IcebergTableFromAwsGlue#catalog}

---

##### `CatalogNamespace`<sup>Optional</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogNamespace"></a>

```csharp
public string CatalogNamespace { get; set; }
```

- *Type:* string

Specifies the namespace (or database) in the AWS Glue catalog that the table belongs to.

If not specified, the catalog integration's default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#catalog_namespace IcebergTableFromAwsGlue#catalog_namespace}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#comment IcebergTableFromAwsGlue#comment}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; set; }
```

- *Type:* string

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#external_volume IcebergTableFromAwsGlue#external_volume}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#id IcebergTableFromAwsGlue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.replaceInvalidCharacters"></a>

```csharp
public bool|IResolvable ReplaceInvalidCharacters { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#replace_invalid_characters IcebergTableFromAwsGlue#replace_invalid_characters}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.timeouts"></a>

```csharp
public IcebergTableFromAwsGlueTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#timeouts IcebergTableFromAwsGlue#timeouts}

---

### IcebergTableFromAwsGlueDescribeOutput <a name="IcebergTableFromAwsGlueDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueDescribeOutput {

};
```


### IcebergTableFromAwsGlueParameters <a name="IcebergTableFromAwsGlueParameters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParameters {

};
```


### IcebergTableFromAwsGlueParametersCatalog <a name="IcebergTableFromAwsGlueParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersCatalog {

};
```


### IcebergTableFromAwsGlueParametersExternalVolume <a name="IcebergTableFromAwsGlueParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersExternalVolume {

};
```


### IcebergTableFromAwsGlueParametersReplaceInvalidCharacters <a name="IcebergTableFromAwsGlueParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersReplaceInvalidCharacters {

};
```


### IcebergTableFromAwsGlueShowOutput <a name="IcebergTableFromAwsGlueShowOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutput {

};
```


### IcebergTableFromAwsGlueShowOutputAutoRefreshStatus <a name="IcebergTableFromAwsGlueShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputAutoRefreshStatus {

};
```


### IcebergTableFromAwsGlueShowOutputPartitionSpecs <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputPartitionSpecs {

};
```


### IcebergTableFromAwsGlueShowOutputPartitionSpecsFields <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputPartitionSpecsFields {

};
```


### IcebergTableFromAwsGlueTimeouts <a name="IcebergTableFromAwsGlueTimeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#create IcebergTableFromAwsGlue#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#delete IcebergTableFromAwsGlue#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#read IcebergTableFromAwsGlue#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#update IcebergTableFromAwsGlue#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#create IcebergTableFromAwsGlue#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#delete IcebergTableFromAwsGlue#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#read IcebergTableFromAwsGlue#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table_from_aws_glue#update IcebergTableFromAwsGlue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromAwsGlueDescribeOutputList <a name="IcebergTableFromAwsGlueDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.get"></a>

```csharp
private IcebergTableFromAwsGlueDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromAwsGlueDescribeOutputOutputReference <a name="IcebergTableFromAwsGlueDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.check">Check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.isNullable">IsNullable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.privacyDomain">PrivacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.sourceIcebergType">SourceIcebergType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.writeDefault">WriteDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput">IcebergTableFromAwsGlueDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.check"></a>

```csharp
public string Check { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `IsNullable`<sup>Required</sup> <a name="IsNullable" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.isNullable"></a>

```csharp
public IResolvable IsNullable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.nameMapping"></a>

```csharp
public string NameMapping { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.primaryKey"></a>

```csharp
public IResolvable PrimaryKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PrivacyDomain`<sup>Required</sup> <a name="PrivacyDomain" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.privacyDomain"></a>

```csharp
public string PrivacyDomain { get; }
```

- *Type:* string

---

##### `SourceIcebergType`<sup>Required</sup> <a name="SourceIcebergType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.sourceIcebergType"></a>

```csharp
public string SourceIcebergType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.uniqueKey"></a>

```csharp
public IResolvable UniqueKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `WriteDefault`<sup>Required</sup> <a name="WriteDefault" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.writeDefault"></a>

```csharp
public string WriteDefault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromAwsGlueDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput">IcebergTableFromAwsGlueDescribeOutput</a>

---


### IcebergTableFromAwsGlueParametersCatalogList <a name="IcebergTableFromAwsGlueParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersCatalogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.get"></a>

```csharp
private IcebergTableFromAwsGlueParametersCatalogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromAwsGlueParametersCatalogOutputReference <a name="IcebergTableFromAwsGlueParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog">IcebergTableFromAwsGlueParametersCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromAwsGlueParametersCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog">IcebergTableFromAwsGlueParametersCatalog</a>

---


### IcebergTableFromAwsGlueParametersExternalVolumeList <a name="IcebergTableFromAwsGlueParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersExternalVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.get"></a>

```csharp
private IcebergTableFromAwsGlueParametersExternalVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromAwsGlueParametersExternalVolumeOutputReference <a name="IcebergTableFromAwsGlueParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersExternalVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume">IcebergTableFromAwsGlueParametersExternalVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromAwsGlueParametersExternalVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume">IcebergTableFromAwsGlueParametersExternalVolume</a>

---


### IcebergTableFromAwsGlueParametersList <a name="IcebergTableFromAwsGlueParametersList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.get"></a>

```csharp
private IcebergTableFromAwsGlueParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromAwsGlueParametersOutputReference <a name="IcebergTableFromAwsGlueParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList">IcebergTableFromAwsGlueParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.externalVolume">ExternalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList">IcebergTableFromAwsGlueParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList">IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters">IcebergTableFromAwsGlueParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.catalog"></a>

```csharp
public IcebergTableFromAwsGlueParametersCatalogList Catalog { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList">IcebergTableFromAwsGlueParametersCatalogList</a>

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.externalVolume"></a>

```csharp
public IcebergTableFromAwsGlueParametersExternalVolumeList ExternalVolume { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList">IcebergTableFromAwsGlueParametersExternalVolumeList</a>

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.replaceInvalidCharacters"></a>

```csharp
public IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList ReplaceInvalidCharacters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList">IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromAwsGlueParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters">IcebergTableFromAwsGlueParameters</a>

---


### IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList <a name="IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.get"></a>

```csharp
private IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters">IcebergTableFromAwsGlueParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromAwsGlueParametersReplaceInvalidCharacters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters">IcebergTableFromAwsGlueParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList <a name="IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.get"></a>

```csharp
private IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">CurrentSnapshotId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.executionState">ExecutionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">LastSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">PendingSnapshotCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus">IcebergTableFromAwsGlueShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentSnapshotId`<sup>Required</sup> <a name="CurrentSnapshotId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```csharp
public double CurrentSnapshotId { get; }
```

- *Type:* double

---

##### `ExecutionState`<sup>Required</sup> <a name="ExecutionState" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```csharp
public string ExecutionState { get; }
```

- *Type:* string

---

##### `LastSnapshotTime`<sup>Required</sup> <a name="LastSnapshotTime" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```csharp
public string LastSnapshotTime { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `PendingSnapshotCount`<sup>Required</sup> <a name="PendingSnapshotCount" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```csharp
public double PendingSnapshotCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromAwsGlueShowOutputAutoRefreshStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus">IcebergTableFromAwsGlueShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromAwsGlueShowOutputList <a name="IcebergTableFromAwsGlueShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.get"></a>

```csharp
private IcebergTableFromAwsGlueShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromAwsGlueShowOutputOutputReference <a name="IcebergTableFromAwsGlueShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.autoRefreshStatus">AutoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList">IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.baseLocation">BaseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.canWriteMetadata">CanWriteMetadata</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogNamespace">CatalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogSyncName">CatalogSyncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogTableName">CatalogTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.currentPartitionSpecId">CurrentPartitionSpecId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.externalVolumeName">ExternalVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableFormatVersion">IcebergTableFormatVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableType">IcebergTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.partitionSpecs">PartitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput">IcebergTableFromAwsGlueShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRefreshStatus`<sup>Required</sup> <a name="AutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.autoRefreshStatus"></a>

```csharp
public IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList AutoRefreshStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList">IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList</a>

---

##### `BaseLocation`<sup>Required</sup> <a name="BaseLocation" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.baseLocation"></a>

```csharp
public string BaseLocation { get; }
```

- *Type:* string

---

##### `CanWriteMetadata`<sup>Required</sup> <a name="CanWriteMetadata" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.canWriteMetadata"></a>

```csharp
public IResolvable CanWriteMetadata { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogNamespace"></a>

```csharp
public string CatalogNamespace { get; }
```

- *Type:* string

---

##### `CatalogSyncName`<sup>Required</sup> <a name="CatalogSyncName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogSyncName"></a>

```csharp
public string CatalogSyncName { get; }
```

- *Type:* string

---

##### `CatalogTableName`<sup>Required</sup> <a name="CatalogTableName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogTableName"></a>

```csharp
public string CatalogTableName { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CurrentPartitionSpecId`<sup>Required</sup> <a name="CurrentPartitionSpecId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.currentPartitionSpecId"></a>

```csharp
public double CurrentPartitionSpecId { get; }
```

- *Type:* double

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ExternalVolumeName`<sup>Required</sup> <a name="ExternalVolumeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.externalVolumeName"></a>

```csharp
public string ExternalVolumeName { get; }
```

- *Type:* string

---

##### `IcebergTableFormatVersion`<sup>Required</sup> <a name="IcebergTableFormatVersion" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```csharp
public double IcebergTableFormatVersion { get; }
```

- *Type:* double

---

##### `IcebergTableType`<sup>Required</sup> <a name="IcebergTableType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableType"></a>

```csharp
public string IcebergTableType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.nameMapping"></a>

```csharp
public string NameMapping { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `PartitionSpecs`<sup>Required</sup> <a name="PartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.partitionSpecs"></a>

```csharp
public IcebergTableFromAwsGlueShowOutputPartitionSpecsList PartitionSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsList</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromAwsGlueShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput">IcebergTableFromAwsGlueShowOutput</a>

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.get"></a>

```csharp
private IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.transform">Transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields">IcebergTableFromAwsGlueShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```csharp
public double FieldId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```csharp
public double SourceId { get; }
```

- *Type:* double

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```csharp
public string Transform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromAwsGlueShowOutputPartitionSpecsFields InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields">IcebergTableFromAwsGlueShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsList <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputPartitionSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.get"></a>

```csharp
private IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.specId">SpecId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs">IcebergTableFromAwsGlueShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fields"></a>

```csharp
public IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList</a>

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.specId"></a>

```csharp
public double SpecId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromAwsGlueShowOutputPartitionSpecs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs">IcebergTableFromAwsGlueShowOutputPartitionSpecs</a>

---


### IcebergTableFromAwsGlueTimeoutsOutputReference <a name="IcebergTableFromAwsGlueTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromAwsGlueTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IcebergTableFromAwsGlueTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

---



