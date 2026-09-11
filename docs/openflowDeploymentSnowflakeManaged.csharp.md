# `openflowDeploymentSnowflakeManaged` Submodule <a name="`openflowDeploymentSnowflakeManaged` Submodule" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowDeploymentSnowflakeManaged <a name="OpenflowDeploymentSnowflakeManaged" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed snowflake_openflow_deployment_snowflake_managed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManaged(Construct Scope, string Id, OpenflowDeploymentSnowflakeManagedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig">OpenflowDeploymentSnowflakeManagedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig">OpenflowDeploymentSnowflakeManagedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable">ResetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts"></a>

```csharp
private void PutTimeouts(OpenflowDeploymentSnowflakeManagedTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEventTable` <a name="ResetEventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetEventTable"></a>

```csharp
private void ResetEventTable()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

OpenflowDeploymentSnowflakeManaged.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

OpenflowDeploymentSnowflakeManaged.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

OpenflowDeploymentSnowflakeManaged.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

OpenflowDeploymentSnowflakeManaged.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OpenflowDeploymentSnowflakeManaged resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpenflowDeploymentSnowflakeManaged to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpenflowDeploymentSnowflakeManaged that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowDeploymentSnowflakeManaged to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput">EventTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable">EventTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.describeOutput"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList">OpenflowDeploymentSnowflakeManagedDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.parameters"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList">OpenflowDeploymentSnowflakeManagedParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.showOutput"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList">OpenflowDeploymentSnowflakeManagedShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeouts"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference">OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EventTableInput`<sup>Optional</sup> <a name="EventTableInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTableInput"></a>

```csharp
public string EventTableInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.timeoutsInput"></a>

```csharp
public IResolvable|OpenflowDeploymentSnowflakeManagedTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.eventTable"></a>

```csharp
public string EventTable { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManaged.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowDeploymentSnowflakeManagedConfig <a name="OpenflowDeploymentSnowflakeManagedConfig" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Comment = null,
    string DisplayName = null,
    string EventTable = null,
    string Id = null,
    OpenflowDeploymentSnowflakeManagedTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable">EventTable</a></code> | <code>string</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#name OpenflowDeploymentSnowflakeManaged#name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#comment OpenflowDeploymentSnowflakeManaged#comment}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#display_name OpenflowDeploymentSnowflakeManaged#display_name}

---

##### `EventTable`<sup>Optional</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.eventTable"></a>

```csharp
public string EventTable { get; set; }
```

- *Type:* string

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#event_table OpenflowDeploymentSnowflakeManaged#event_table}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#id OpenflowDeploymentSnowflakeManaged#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedConfig.property.timeouts"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#timeouts OpenflowDeploymentSnowflakeManaged#timeouts}

---

### OpenflowDeploymentSnowflakeManagedDescribeOutput <a name="OpenflowDeploymentSnowflakeManagedDescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedDescribeOutput {

};
```


### OpenflowDeploymentSnowflakeManagedParameters <a name="OpenflowDeploymentSnowflakeManagedParameters" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedParameters {

};
```


### OpenflowDeploymentSnowflakeManagedParametersEventTable <a name="OpenflowDeploymentSnowflakeManagedParametersEventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedParametersEventTable {

};
```


### OpenflowDeploymentSnowflakeManagedShowOutput <a name="OpenflowDeploymentSnowflakeManagedShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedShowOutput {

};
```


### OpenflowDeploymentSnowflakeManagedTimeouts <a name="OpenflowDeploymentSnowflakeManagedTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#create OpenflowDeploymentSnowflakeManaged#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#delete OpenflowDeploymentSnowflakeManaged#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#read OpenflowDeploymentSnowflakeManaged#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_snowflake_managed#update OpenflowDeploymentSnowflakeManaged#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowDeploymentSnowflakeManagedDescribeOutputList <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get"></a>

```csharp
private OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType">VpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.customIngressHostname"></a>

```csharp
public string CustomIngressHostname { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.usePrivateLink"></a>

```csharp
public IResolvable UsePrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```csharp
public IResolvable UseUserAuthOverPrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.vpcType"></a>

```csharp
public string VpcType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedDescribeOutput">OpenflowDeploymentSnowflakeManagedDescribeOutput</a>

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableList <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedParametersEventTableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get"></a>

```csharp
private OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableOutputReference.property.internalValue"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedParametersEventTable InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTable">OpenflowDeploymentSnowflakeManagedParametersEventTable</a>

---


### OpenflowDeploymentSnowflakeManagedParametersList <a name="OpenflowDeploymentSnowflakeManagedParametersList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get"></a>

```csharp
private OpenflowDeploymentSnowflakeManagedParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OpenflowDeploymentSnowflakeManagedParametersOutputReference <a name="OpenflowDeploymentSnowflakeManagedParametersOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable">EventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.eventTable"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedParametersEventTableList EventTable { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersEventTableList">OpenflowDeploymentSnowflakeManagedParametersEventTableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParametersOutputReference.property.internalValue"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedParameters">OpenflowDeploymentSnowflakeManagedParameters</a>

---


### OpenflowDeploymentSnowflakeManagedShowOutputList <a name="OpenflowDeploymentSnowflakeManagedShowOutputList" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get"></a>

```csharp
private OpenflowDeploymentSnowflakeManagedShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OpenflowDeploymentSnowflakeManagedShowOutputOutputReference <a name="OpenflowDeploymentSnowflakeManagedShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType">VpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.customIngressHostname"></a>

```csharp
public string CustomIngressHostname { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.usePrivateLink"></a>

```csharp
public IResolvable UsePrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```csharp
public IResolvable UseUserAuthOverPrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.vpcType"></a>

```csharp
public string VpcType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutputOutputReference.property.internalValue"></a>

```csharp
public OpenflowDeploymentSnowflakeManagedShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedShowOutput">OpenflowDeploymentSnowflakeManagedShowOutput</a>

---


### OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference <a name="OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpenflowDeploymentSnowflakeManagedTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowDeploymentSnowflakeManaged.OpenflowDeploymentSnowflakeManagedTimeouts">OpenflowDeploymentSnowflakeManagedTimeouts</a>

---



