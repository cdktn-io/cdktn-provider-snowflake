# `failoverGroup` Submodule <a name="`failoverGroup` Submodule" id="@cdktn/provider-snowflake.failoverGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroup <a name="FailoverGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group snowflake_failover_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroup(Construct Scope, string Id, FailoverGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig">FailoverGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases">ResetAllowedDatabases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes">ResetAllowedExternalVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes">ResetAllowedIntegrationTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares">ResetAllowedShares</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration">ResetErrorIntegration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck">ResetIgnoreEditionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh">ResetOptimizedRefresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule">ResetReplicationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance">ResetRpoAssurance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(FailoverGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---

##### `ResetAllowedDatabases` <a name="ResetAllowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedDatabases"></a>

```csharp
private void ResetAllowedDatabases()
```

##### `ResetAllowedExternalVolumes` <a name="ResetAllowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedExternalVolumes"></a>

```csharp
private void ResetAllowedExternalVolumes()
```

##### `ResetAllowedIntegrationTypes` <a name="ResetAllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedIntegrationTypes"></a>

```csharp
private void ResetAllowedIntegrationTypes()
```

##### `ResetAllowedShares` <a name="ResetAllowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetAllowedShares"></a>

```csharp
private void ResetAllowedShares()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetErrorIntegration` <a name="ResetErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetErrorIntegration"></a>

```csharp
private void ResetErrorIntegration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreEditionCheck` <a name="ResetIgnoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetIgnoreEditionCheck"></a>

```csharp
private void ResetIgnoreEditionCheck()
```

##### `ResetOptimizedRefresh` <a name="ResetOptimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetOptimizedRefresh"></a>

```csharp
private void ResetOptimizedRefresh()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetReplicationSchedule` <a name="ResetReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetReplicationSchedule"></a>

```csharp
private void ResetReplicationSchedule()
```

##### `ResetRpoAssurance` <a name="ResetRpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetRpoAssurance"></a>

```csharp
private void ResetRpoAssurance()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FailoverGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FailoverGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FailoverGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FailoverGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FailoverGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FailoverGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FailoverGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FailoverGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary">IsPrimary</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput">AllowedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput">AllowedDatabasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput">AllowedExternalVolumesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput">AllowedIntegrationTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput">AllowedSharesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput">ErrorIntegrationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput">IgnoreEditionCheckInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput">ObjectTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput">OptimizedRefreshInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput">ReplicationScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput">RpoAssuranceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts">AllowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases">AllowedDatabases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes">AllowedExternalVolumes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares">AllowedShares</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration">ErrorIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes">ObjectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh">OptimizedRefresh</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule">ReplicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance">RpoAssurance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.isPrimary"></a>

```csharp
public IResolvable IsPrimary { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.showOutput"></a>

```csharp
public FailoverGroupShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList">FailoverGroupShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeouts"></a>

```csharp
public FailoverGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference">FailoverGroupTimeoutsOutputReference</a>

---

##### `AllowedAccountsInput`<sup>Optional</sup> <a name="AllowedAccountsInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccountsInput"></a>

```csharp
public string[] AllowedAccountsInput { get; }
```

- *Type:* string[]

---

##### `AllowedDatabasesInput`<sup>Optional</sup> <a name="AllowedDatabasesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabasesInput"></a>

```csharp
public string[] AllowedDatabasesInput { get; }
```

- *Type:* string[]

---

##### `AllowedExternalVolumesInput`<sup>Optional</sup> <a name="AllowedExternalVolumesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumesInput"></a>

```csharp
public string[] AllowedExternalVolumesInput { get; }
```

- *Type:* string[]

---

##### `AllowedIntegrationTypesInput`<sup>Optional</sup> <a name="AllowedIntegrationTypesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypesInput"></a>

```csharp
public string[] AllowedIntegrationTypesInput { get; }
```

- *Type:* string[]

---

##### `AllowedSharesInput`<sup>Optional</sup> <a name="AllowedSharesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedSharesInput"></a>

```csharp
public string[] AllowedSharesInput { get; }
```

- *Type:* string[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ErrorIntegrationInput`<sup>Optional</sup> <a name="ErrorIntegrationInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegrationInput"></a>

```csharp
public string ErrorIntegrationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreEditionCheckInput`<sup>Optional</sup> <a name="IgnoreEditionCheckInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheckInput"></a>

```csharp
public bool|IResolvable IgnoreEditionCheckInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObjectTypesInput`<sup>Optional</sup> <a name="ObjectTypesInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypesInput"></a>

```csharp
public string[] ObjectTypesInput { get; }
```

- *Type:* string[]

---

##### `OptimizedRefreshInput`<sup>Optional</sup> <a name="OptimizedRefreshInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefreshInput"></a>

```csharp
public bool|IResolvable OptimizedRefreshInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplicationScheduleInput`<sup>Optional</sup> <a name="ReplicationScheduleInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationScheduleInput"></a>

```csharp
public string ReplicationScheduleInput { get; }
```

- *Type:* string

---

##### `RpoAssuranceInput`<sup>Optional</sup> <a name="RpoAssuranceInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssuranceInput"></a>

```csharp
public bool|IResolvable RpoAssuranceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.timeoutsInput"></a>

```csharp
public IResolvable|FailoverGroupTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedAccounts"></a>

```csharp
public string[] AllowedAccounts { get; }
```

- *Type:* string[]

---

##### `AllowedDatabases`<sup>Required</sup> <a name="AllowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedDatabases"></a>

```csharp
public string[] AllowedDatabases { get; }
```

- *Type:* string[]

---

##### `AllowedExternalVolumes`<sup>Required</sup> <a name="AllowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedExternalVolumes"></a>

```csharp
public string[] AllowedExternalVolumes { get; }
```

- *Type:* string[]

---

##### `AllowedIntegrationTypes`<sup>Required</sup> <a name="AllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedIntegrationTypes"></a>

```csharp
public string[] AllowedIntegrationTypes { get; }
```

- *Type:* string[]

---

##### `AllowedShares`<sup>Required</sup> <a name="AllowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.allowedShares"></a>

```csharp
public string[] AllowedShares { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ErrorIntegration`<sup>Required</sup> <a name="ErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.errorIntegration"></a>

```csharp
public string ErrorIntegration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreEditionCheck`<sup>Required</sup> <a name="IgnoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.ignoreEditionCheck"></a>

```csharp
public bool|IResolvable IgnoreEditionCheck { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.objectTypes"></a>

```csharp
public string[] ObjectTypes { get; }
```

- *Type:* string[]

---

##### `OptimizedRefresh`<sup>Required</sup> <a name="OptimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.optimizedRefresh"></a>

```csharp
public bool|IResolvable OptimizedRefresh { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.replicationSchedule"></a>

```csharp
public string ReplicationSchedule { get; }
```

- *Type:* string

---

##### `RpoAssurance`<sup>Required</sup> <a name="RpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.rpoAssurance"></a>

```csharp
public bool|IResolvable RpoAssurance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupConfig <a name="FailoverGroupConfig" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] AllowedAccounts,
    string Name,
    string[] ObjectTypes,
    string[] AllowedDatabases = null,
    string[] AllowedExternalVolumes = null,
    string[] AllowedIntegrationTypes = null,
    string[] AllowedShares = null,
    string Comment = null,
    string ErrorIntegration = null,
    string Id = null,
    bool|IResolvable IgnoreEditionCheck = null,
    bool|IResolvable OptimizedRefresh = null,
    bool|IResolvable ReadOnly = null,
    string ReplicationSchedule = null,
    bool|IResolvable RpoAssurance = null,
    FailoverGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts">AllowedAccounts</a></code> | <code>string[]</code> | Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the failover group; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes">ObjectTypes</a></code> | <code>string[]</code> | Types of objects for which replication and failover from the source account to the target accounts is enabled. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases">AllowedDatabases</a></code> | <code>string[]</code> | Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes">AllowedExternalVolumes</a></code> | <code>string[]</code> | External volumes enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>string[]</code> | Integration types enabled for replication and failover. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares">AllowedShares</a></code> | <code>string[]</code> | Shares enabled for replication and failover. OBJECT_TYPES must include SHARES. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment">Comment</a></code> | <code>string</code> | Comment for the failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration">ErrorIntegration</a></code> | <code>string</code> | Notification integration that receives refresh error notifications. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck">IgnoreEditionCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Allows replicating objects to accounts on lower editions. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh">OptimizedRefresh</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the failover group uses Optimized Refresh. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly">ReadOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables the read-only mode of a primary failover group. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule">ReplicationSchedule</a></code> | <code>string</code> | Schedule for refreshing secondary failover groups. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance">RpoAssurance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the failover group uses RPO Assurance. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedAccounts"></a>

```csharp
public string[] AllowedAccounts { get; set; }
```

- *Type:* string[]

Target accounts, in the form `<organization_name>.<account_name>`, to which replication and failover is enabled. Snowflake adds the source account to every failover group, so do not list it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_accounts FailoverGroup#allowed_accounts}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the failover group;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#name FailoverGroup#name}

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.objectTypes"></a>

```csharp
public string[] ObjectTypes { get; set; }
```

- *Type:* string[]

Types of objects for which replication and failover from the source account to the target accounts is enabled.

Valid values are (case-insensitive): `ACCOUNT PARAMETERS` | `DATABASES` | `EXTERNAL VOLUMES` | `INTEGRATIONS` | `LISTINGS` | `NETWORK POLICIES` | `PROFILES` | `RESOURCE MONITORS` | `ROLES` | `SHARES` | `USERS` | `WAREHOUSES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#object_types FailoverGroup#object_types}

---

##### `AllowedDatabases`<sup>Optional</sup> <a name="AllowedDatabases" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedDatabases"></a>

```csharp
public string[] AllowedDatabases { get; set; }
```

- *Type:* string[]

Databases enabled for replication and failover. OBJECT_TYPES must include DATABASES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_databases FailoverGroup#allowed_databases}

---

##### `AllowedExternalVolumes`<sup>Optional</sup> <a name="AllowedExternalVolumes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedExternalVolumes"></a>

```csharp
public string[] AllowedExternalVolumes { get; set; }
```

- *Type:* string[]

External volumes enabled for replication and failover.

OBJECT_TYPES must include EXTERNAL VOLUMES. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_external_volumes FailoverGroup#allowed_external_volumes}

---

##### `AllowedIntegrationTypes`<sup>Optional</sup> <a name="AllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedIntegrationTypes"></a>

```csharp
public string[] AllowedIntegrationTypes { get; set; }
```

- *Type:* string[]

Integration types enabled for replication and failover.

OBJECT_TYPES must include INTEGRATIONS. SECURITY INTEGRATIONS also requires ROLES. Valid values are (case-insensitive): `SECURITY INTEGRATIONS` | `API INTEGRATIONS` | `STORAGE INTEGRATIONS` | `EXTERNAL ACCESS INTEGRATIONS` | `NOTIFICATION INTEGRATIONS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_integration_types FailoverGroup#allowed_integration_types}

---

##### `AllowedShares`<sup>Optional</sup> <a name="AllowedShares" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.allowedShares"></a>

```csharp
public string[] AllowedShares { get; set; }
```

- *Type:* string[]

Shares enabled for replication and failover. OBJECT_TYPES must include SHARES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#allowed_shares FailoverGroup#allowed_shares}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Comment for the failover group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#comment FailoverGroup#comment}

---

##### `ErrorIntegration`<sup>Optional</sup> <a name="ErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.errorIntegration"></a>

```csharp
public string ErrorIntegration { get; set; }
```

- *Type:* string

Notification integration that receives refresh error notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#error_integration FailoverGroup#error_integration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#id FailoverGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreEditionCheck`<sup>Optional</sup> <a name="IgnoreEditionCheck" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.ignoreEditionCheck"></a>

```csharp
public bool|IResolvable IgnoreEditionCheck { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Allows replicating objects to accounts on lower editions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#ignore_edition_check FailoverGroup#ignore_edition_check}

---

##### `OptimizedRefresh`<sup>Optional</sup> <a name="OptimizedRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.optimizedRefresh"></a>

```csharp
public bool|IResolvable OptimizedRefresh { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the failover group uses Optimized Refresh.

Set on the primary failover group only. When true, a `replication_schedule` with an interval of 6 hours or less is required (Snowflake recommends `10 MINUTE` or less). Cannot be set together with `rpo_assurance`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#optimized_refresh FailoverGroup#optimized_refresh}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables the read-only mode of a primary failover group.

Snowflake rejects changes to `object_types`, `allowed_databases`, `allowed_external_volumes`, `allowed_shares` and `allowed_integration_types` in this mode, so set it to false (or remove it) before changing them. With the `FAILOVER_GROUP_READ_ONLY_AUTO_SWITCH` experiment listed in [`experimental_features_enabled`](../#experimental_features_enabled-1) in the provider block, the provider leaves the read-only mode and enters it again around these changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read_only FailoverGroup#read_only}

---

##### `ReplicationSchedule`<sup>Optional</sup> <a name="ReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.replicationSchedule"></a>

```csharp
public string ReplicationSchedule { get; set; }
```

- *Type:* string

Schedule for refreshing secondary failover groups.

An interval (`<num> MINUTE`) or `USING CRON <expr> <time_zone>`. Remove the attribute to unset the schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#replication_schedule FailoverGroup#replication_schedule}

---

##### `RpoAssurance`<sup>Optional</sup> <a name="RpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.rpoAssurance"></a>

```csharp
public bool|IResolvable RpoAssurance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the failover group uses RPO Assurance.

Set on the primary failover group only. Needs no replication schedule, enables Optimized Refresh automatically, and cannot be set together with `optimized_refresh`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#rpo_assurance FailoverGroup#rpo_assurance}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupConfig.property.timeouts"></a>

```csharp
public FailoverGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#timeouts FailoverGroup#timeouts}

---

### FailoverGroupShowOutput <a name="FailoverGroupShowOutput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupShowOutput {

};
```


### FailoverGroupTimeouts <a name="FailoverGroupTimeouts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#create FailoverGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#delete FailoverGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#read FailoverGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group#update FailoverGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupShowOutputList <a name="FailoverGroupShowOutputList" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get"></a>

```csharp
private FailoverGroupShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FailoverGroupShowOutputOutputReference <a name="FailoverGroupShowOutputOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator">AccountLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts">AllowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration">ErrorIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup">IsListingAutoFulfillmentGroup</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled">IsOptimizedRefreshEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary">IsPrimary</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly">IsPrimaryReadOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh">NextScheduledRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes">ObjectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary">Primary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup">RegionGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule">ReplicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance">RpoAssurance</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState">SecondaryState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion">SnowflakeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountLocator`<sup>Required</sup> <a name="AccountLocator" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountLocator"></a>

```csharp
public string AccountLocator { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedAccounts"></a>

```csharp
public string[] AllowedAccounts { get; }
```

- *Type:* string[]

---

##### `AllowedIntegrationTypes`<sup>Required</sup> <a name="AllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.allowedIntegrationTypes"></a>

```csharp
public string[] AllowedIntegrationTypes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `ErrorIntegration`<sup>Required</sup> <a name="ErrorIntegration" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.errorIntegration"></a>

```csharp
public string ErrorIntegration { get; }
```

- *Type:* string

---

##### `IsListingAutoFulfillmentGroup`<sup>Required</sup> <a name="IsListingAutoFulfillmentGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isListingAutoFulfillmentGroup"></a>

```csharp
public IResolvable IsListingAutoFulfillmentGroup { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsOptimizedRefreshEnabled`<sup>Required</sup> <a name="IsOptimizedRefreshEnabled" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isOptimizedRefreshEnabled"></a>

```csharp
public IResolvable IsOptimizedRefreshEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimary"></a>

```csharp
public IResolvable IsPrimary { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsPrimaryReadOnly`<sup>Required</sup> <a name="IsPrimaryReadOnly" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.isPrimaryReadOnly"></a>

```csharp
public IResolvable IsPrimaryReadOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NextScheduledRefresh`<sup>Required</sup> <a name="NextScheduledRefresh" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.nextScheduledRefresh"></a>

```csharp
public string NextScheduledRefresh { get; }
```

- *Type:* string

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.objectTypes"></a>

```csharp
public string[] ObjectTypes { get; }
```

- *Type:* string[]

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.primary"></a>

```csharp
public string Primary { get; }
```

- *Type:* string

---

##### `RegionGroup`<sup>Required</sup> <a name="RegionGroup" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.regionGroup"></a>

```csharp
public string RegionGroup { get; }
```

- *Type:* string

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.replicationSchedule"></a>

```csharp
public string ReplicationSchedule { get; }
```

- *Type:* string

---

##### `RpoAssurance`<sup>Required</sup> <a name="RpoAssurance" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.rpoAssurance"></a>

```csharp
public IResolvable RpoAssurance { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SecondaryState`<sup>Required</sup> <a name="SecondaryState" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.secondaryState"></a>

```csharp
public string SecondaryState { get; }
```

- *Type:* string

---

##### `SnowflakeRegion`<sup>Required</sup> <a name="SnowflakeRegion" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.snowflakeRegion"></a>

```csharp
public string SnowflakeRegion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutputOutputReference.property.internalValue"></a>

```csharp
public FailoverGroupShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupShowOutput">FailoverGroupShowOutput</a>

---


### FailoverGroupTimeoutsOutputReference <a name="FailoverGroupTimeoutsOutputReference" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FailoverGroupTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.failoverGroup.FailoverGroupTimeouts">FailoverGroupTimeouts</a>

---



