# `failoverGroupSecondary` Submodule <a name="`failoverGroupSecondary` Submodule" id="@cdktn/provider-snowflake.failoverGroupSecondary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FailoverGroupSecondary <a name="FailoverGroupSecondary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary snowflake_failover_group_secondary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupSecondary(Construct Scope, string Id, FailoverGroupSecondaryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig">FailoverGroupSecondaryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig">FailoverGroupSecondaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts"></a>

```csharp
private void PutTimeouts(FailoverGroupSecondaryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FailoverGroupSecondary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FailoverGroupSecondary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FailoverGroupSecondary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FailoverGroupSecondary.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

FailoverGroupSecondary.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FailoverGroupSecondary resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FailoverGroupSecondary to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FailoverGroupSecondary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FailoverGroupSecondary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.isPrimary">IsPrimary</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList">FailoverGroupSecondaryShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference">FailoverGroupSecondaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primaryInput">PrimaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primary">Primary</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.isPrimary"></a>

```csharp
public IResolvable IsPrimary { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.showOutput"></a>

```csharp
public FailoverGroupSecondaryShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList">FailoverGroupSecondaryShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeouts"></a>

```csharp
public FailoverGroupSecondaryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference">FailoverGroupSecondaryTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryInput`<sup>Optional</sup> <a name="PrimaryInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primaryInput"></a>

```csharp
public string PrimaryInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.timeoutsInput"></a>

```csharp
public IResolvable|FailoverGroupSecondaryTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.primary"></a>

```csharp
public string Primary { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FailoverGroupSecondaryConfig <a name="FailoverGroupSecondaryConfig" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupSecondaryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Primary,
    string Id = null,
    FailoverGroupSecondaryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the failover group secondary; |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.primary">Primary</a></code> | <code>string</code> | Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the failover group secondary;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#name FailoverGroupSecondary#name}

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.primary"></a>

```csharp
public string Primary { get; set; }
```

- *Type:* string

Primary failover group to replicate, in the form `<organization_name>.<account_name>.<failover_group_name>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#primary FailoverGroupSecondary#primary}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#id FailoverGroupSecondary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryConfig.property.timeouts"></a>

```csharp
public FailoverGroupSecondaryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#timeouts FailoverGroupSecondary#timeouts}

---

### FailoverGroupSecondaryShowOutput <a name="FailoverGroupSecondaryShowOutput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupSecondaryShowOutput {

};
```


### FailoverGroupSecondaryTimeouts <a name="FailoverGroupSecondaryTimeouts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupSecondaryTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#create FailoverGroupSecondary#create}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#delete FailoverGroupSecondary#delete}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#read FailoverGroupSecondary#read}. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#update FailoverGroupSecondary#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#create FailoverGroupSecondary#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#delete FailoverGroupSecondary#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#read FailoverGroupSecondary#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/failover_group_secondary#update FailoverGroupSecondary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FailoverGroupSecondaryShowOutputList <a name="FailoverGroupSecondaryShowOutputList" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupSecondaryShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.get"></a>

```csharp
private FailoverGroupSecondaryShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### FailoverGroupSecondaryShowOutputOutputReference <a name="FailoverGroupSecondaryShowOutputOutputReference" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupSecondaryShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountLocator">AccountLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedAccounts">AllowedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedIntegrationTypes">AllowedIntegrationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.errorIntegration">ErrorIntegration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isListingAutoFulfillmentGroup">IsListingAutoFulfillmentGroup</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isOptimizedRefreshEnabled">IsOptimizedRefreshEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimary">IsPrimary</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimaryReadOnly">IsPrimaryReadOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.nextScheduledRefresh">NextScheduledRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.objectTypes">ObjectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.organizationName">OrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.primary">Primary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.regionGroup">RegionGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.replicationSchedule">ReplicationSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.rpoAssurance">RpoAssurance</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.secondaryState">SecondaryState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.snowflakeRegion">SnowflakeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput">FailoverGroupSecondaryShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountLocator`<sup>Required</sup> <a name="AccountLocator" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountLocator"></a>

```csharp
public string AccountLocator { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AllowedAccounts`<sup>Required</sup> <a name="AllowedAccounts" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedAccounts"></a>

```csharp
public string[] AllowedAccounts { get; }
```

- *Type:* string[]

---

##### `AllowedIntegrationTypes`<sup>Required</sup> <a name="AllowedIntegrationTypes" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.allowedIntegrationTypes"></a>

```csharp
public string[] AllowedIntegrationTypes { get; }
```

- *Type:* string[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `ErrorIntegration`<sup>Required</sup> <a name="ErrorIntegration" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.errorIntegration"></a>

```csharp
public string ErrorIntegration { get; }
```

- *Type:* string

---

##### `IsListingAutoFulfillmentGroup`<sup>Required</sup> <a name="IsListingAutoFulfillmentGroup" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isListingAutoFulfillmentGroup"></a>

```csharp
public IResolvable IsListingAutoFulfillmentGroup { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsOptimizedRefreshEnabled`<sup>Required</sup> <a name="IsOptimizedRefreshEnabled" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isOptimizedRefreshEnabled"></a>

```csharp
public IResolvable IsOptimizedRefreshEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsPrimary`<sup>Required</sup> <a name="IsPrimary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimary"></a>

```csharp
public IResolvable IsPrimary { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsPrimaryReadOnly`<sup>Required</sup> <a name="IsPrimaryReadOnly" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.isPrimaryReadOnly"></a>

```csharp
public IResolvable IsPrimaryReadOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NextScheduledRefresh`<sup>Required</sup> <a name="NextScheduledRefresh" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.nextScheduledRefresh"></a>

```csharp
public string NextScheduledRefresh { get; }
```

- *Type:* string

---

##### `ObjectTypes`<sup>Required</sup> <a name="ObjectTypes" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.objectTypes"></a>

```csharp
public string[] ObjectTypes { get; }
```

- *Type:* string[]

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.organizationName"></a>

```csharp
public string OrganizationName { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Primary`<sup>Required</sup> <a name="Primary" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.primary"></a>

```csharp
public string Primary { get; }
```

- *Type:* string

---

##### `RegionGroup`<sup>Required</sup> <a name="RegionGroup" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.regionGroup"></a>

```csharp
public string RegionGroup { get; }
```

- *Type:* string

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.replicationSchedule"></a>

```csharp
public string ReplicationSchedule { get; }
```

- *Type:* string

---

##### `RpoAssurance`<sup>Required</sup> <a name="RpoAssurance" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.rpoAssurance"></a>

```csharp
public IResolvable RpoAssurance { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SecondaryState`<sup>Required</sup> <a name="SecondaryState" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.secondaryState"></a>

```csharp
public string SecondaryState { get; }
```

- *Type:* string

---

##### `SnowflakeRegion`<sup>Required</sup> <a name="SnowflakeRegion" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.snowflakeRegion"></a>

```csharp
public string SnowflakeRegion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutputOutputReference.property.internalValue"></a>

```csharp
public FailoverGroupSecondaryShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryShowOutput">FailoverGroupSecondaryShowOutput</a>

---


### FailoverGroupSecondaryTimeoutsOutputReference <a name="FailoverGroupSecondaryTimeoutsOutputReference" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new FailoverGroupSecondaryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FailoverGroupSecondaryTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.failoverGroupSecondary.FailoverGroupSecondaryTimeouts">FailoverGroupSecondaryTimeouts</a>

---



