# `openflowDeploymentByoc` Submodule <a name="`openflowDeploymentByoc` Submodule" id="@cdktn/provider-snowflake.openflowDeploymentByoc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenflowDeploymentByoc <a name="OpenflowDeploymentByoc" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc snowflake_openflow_deployment_byoc}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByoc(Construct Scope, string Id, OpenflowDeploymentByocConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig">OpenflowDeploymentByocConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig">OpenflowDeploymentByocConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetCustomIngressHostname">ResetCustomIngressHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetEventTable">ResetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUsePrivateLink">ResetUsePrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUseUserAuthOverPrivatelink">ResetUseUserAuthOverPrivatelink</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts"></a>

```csharp
private void PutTimeouts(OpenflowDeploymentByocTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCustomIngressHostname` <a name="ResetCustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetCustomIngressHostname"></a>

```csharp
private void ResetCustomIngressHostname()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEventTable` <a name="ResetEventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetEventTable"></a>

```csharp
private void ResetEventTable()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUsePrivateLink` <a name="ResetUsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUsePrivateLink"></a>

```csharp
private void ResetUsePrivateLink()
```

##### `ResetUseUserAuthOverPrivatelink` <a name="ResetUseUserAuthOverPrivatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.resetUseUserAuthOverPrivatelink"></a>

```csharp
private void ResetUseUserAuthOverPrivatelink()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpenflowDeploymentByoc resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

OpenflowDeploymentByoc.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

OpenflowDeploymentByoc.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

OpenflowDeploymentByoc.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

OpenflowDeploymentByoc.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OpenflowDeploymentByoc resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpenflowDeploymentByoc to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpenflowDeploymentByoc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OpenflowDeploymentByoc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList">OpenflowDeploymentByocDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList">OpenflowDeploymentByocParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList">OpenflowDeploymentByocShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference">OpenflowDeploymentByocTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostnameInput">CustomIngressHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTableInput">EventTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLinkInput">UsePrivateLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelinkInput">UseUserAuthOverPrivatelinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcTypeInput">VpcTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostname">CustomIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTable">EventTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLink">UsePrivateLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelink">UseUserAuthOverPrivatelink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcType">VpcType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.describeOutput"></a>

```csharp
public OpenflowDeploymentByocDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList">OpenflowDeploymentByocDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.parameters"></a>

```csharp
public OpenflowDeploymentByocParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList">OpenflowDeploymentByocParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.showOutput"></a>

```csharp
public OpenflowDeploymentByocShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList">OpenflowDeploymentByocShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeouts"></a>

```csharp
public OpenflowDeploymentByocTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference">OpenflowDeploymentByocTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CustomIngressHostnameInput`<sup>Optional</sup> <a name="CustomIngressHostnameInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostnameInput"></a>

```csharp
public string CustomIngressHostnameInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EventTableInput`<sup>Optional</sup> <a name="EventTableInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTableInput"></a>

```csharp
public string EventTableInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.timeoutsInput"></a>

```csharp
public IResolvable|OpenflowDeploymentByocTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

---

##### `UsePrivateLinkInput`<sup>Optional</sup> <a name="UsePrivateLinkInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLinkInput"></a>

```csharp
public string UsePrivateLinkInput { get; }
```

- *Type:* string

---

##### `UseUserAuthOverPrivatelinkInput`<sup>Optional</sup> <a name="UseUserAuthOverPrivatelinkInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelinkInput"></a>

```csharp
public string UseUserAuthOverPrivatelinkInput { get; }
```

- *Type:* string

---

##### `VpcTypeInput`<sup>Optional</sup> <a name="VpcTypeInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcTypeInput"></a>

```csharp
public string VpcTypeInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.customIngressHostname"></a>

```csharp
public string CustomIngressHostname { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.eventTable"></a>

```csharp
public string EventTable { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.usePrivateLink"></a>

```csharp
public string UsePrivateLink { get; }
```

- *Type:* string

---

##### `UseUserAuthOverPrivatelink`<sup>Required</sup> <a name="UseUserAuthOverPrivatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.useUserAuthOverPrivatelink"></a>

```csharp
public string UseUserAuthOverPrivatelink { get; }
```

- *Type:* string

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.vpcType"></a>

```csharp
public string VpcType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByoc.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpenflowDeploymentByocConfig <a name="OpenflowDeploymentByocConfig" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string VpcType,
    string Comment = null,
    string CustomIngressHostname = null,
    string DisplayName = null,
    string EventTable = null,
    string Id = null,
    OpenflowDeploymentByocTimeouts Timeouts = null,
    string UsePrivateLink = null,
    string UseUserAuthOverPrivatelink = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the Openflow deployment; |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.vpcType">VpcType</a></code> | <code>string</code> | Specifies whether the deployment's VPC is created by Snowflake or supplied by you. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the Openflow deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.customIngressHostname">CustomIngressHostname</a></code> | <code>string</code> | Specifies a custom hostname for ingress into the deployment. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.eventTable">EventTable</a></code> | <code>string</code> | Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table). |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.usePrivateLink">UsePrivateLink</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.useUserAuthOverPrivatelink">UseUserAuthOverPrivatelink</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the Openflow deployment;

must be unique for the account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#name OpenflowDeploymentByoc#name}

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.vpcType"></a>

```csharp
public string VpcType { get; set; }
```

- *Type:* string

Specifies whether the deployment's VPC is created by Snowflake or supplied by you.

Valid values are (case-insensitive): `MANAGED` | `PROVIDED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#vpc_type OpenflowDeploymentByoc#vpc_type}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the Openflow deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#comment OpenflowDeploymentByoc#comment}

---

##### `CustomIngressHostname`<sup>Optional</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.customIngressHostname"></a>

```csharp
public string CustomIngressHostname { get; set; }
```

- *Type:* string

Specifies a custom hostname for ingress into the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#custom_ingress_hostname OpenflowDeploymentByoc#custom_ingress_hostname}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A free-text alias for the deployment. Shown in the Openflow UI in place of the deployment's identifier when set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#display_name OpenflowDeploymentByoc#display_name}

---

##### `EventTable`<sup>Optional</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.eventTable"></a>

```csharp
public string EventTable { get; set; }
```

- *Type:* string

Fully qualified name of an event table the deployment logs to. For more information, check [EVENT_TABLE documentation](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#event_table OpenflowDeploymentByoc#event_table}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#id OpenflowDeploymentByoc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.timeouts"></a>

```csharp
public OpenflowDeploymentByocTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#timeouts OpenflowDeploymentByoc#timeouts}

---

##### `UsePrivateLink`<sup>Optional</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.usePrivateLink"></a>

```csharp
public string UsePrivateLink { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the deployment is reached over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_private_link OpenflowDeploymentByoc#use_private_link}

---

##### `UseUserAuthOverPrivatelink`<sup>Optional</sup> <a name="UseUserAuthOverPrivatelink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocConfig.property.useUserAuthOverPrivatelink"></a>

```csharp
public string UseUserAuthOverPrivatelink { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether user authentication is performed over private link.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#use_user_auth_over_privatelink OpenflowDeploymentByoc#use_user_auth_over_privatelink}

---

### OpenflowDeploymentByocDescribeOutput <a name="OpenflowDeploymentByocDescribeOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocDescribeOutput {

};
```


### OpenflowDeploymentByocParameters <a name="OpenflowDeploymentByocParameters" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocParameters {

};
```


### OpenflowDeploymentByocParametersEventTable <a name="OpenflowDeploymentByocParametersEventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocParametersEventTable {

};
```


### OpenflowDeploymentByocShowOutput <a name="OpenflowDeploymentByocShowOutput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocShowOutput {

};
```


### OpenflowDeploymentByocTimeouts <a name="OpenflowDeploymentByocTimeouts" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#create OpenflowDeploymentByoc#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#delete OpenflowDeploymentByoc#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#read OpenflowDeploymentByoc#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/resources/openflow_deployment_byoc#update OpenflowDeploymentByoc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpenflowDeploymentByocDescribeOutputList <a name="OpenflowDeploymentByocDescribeOutputList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get"></a>

```csharp
private OpenflowDeploymentByocDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OpenflowDeploymentByocDescribeOutputOutputReference <a name="OpenflowDeploymentByocDescribeOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.vpcType">VpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput">OpenflowDeploymentByocDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.customIngressHostname"></a>

```csharp
public string CustomIngressHostname { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.usePrivateLink"></a>

```csharp
public IResolvable UsePrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```csharp
public IResolvable UseUserAuthOverPrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.vpcType"></a>

```csharp
public string VpcType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public OpenflowDeploymentByocDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocDescribeOutput">OpenflowDeploymentByocDescribeOutput</a>

---


### OpenflowDeploymentByocParametersEventTableList <a name="OpenflowDeploymentByocParametersEventTableList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocParametersEventTableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get"></a>

```csharp
private OpenflowDeploymentByocParametersEventTableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OpenflowDeploymentByocParametersEventTableOutputReference <a name="OpenflowDeploymentByocParametersEventTableOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocParametersEventTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable">OpenflowDeploymentByocParametersEventTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableOutputReference.property.internalValue"></a>

```csharp
public OpenflowDeploymentByocParametersEventTable InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTable">OpenflowDeploymentByocParametersEventTable</a>

---


### OpenflowDeploymentByocParametersList <a name="OpenflowDeploymentByocParametersList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get"></a>

```csharp
private OpenflowDeploymentByocParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OpenflowDeploymentByocParametersOutputReference <a name="OpenflowDeploymentByocParametersOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.eventTable">EventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList">OpenflowDeploymentByocParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters">OpenflowDeploymentByocParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.eventTable"></a>

```csharp
public OpenflowDeploymentByocParametersEventTableList EventTable { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersEventTableList">OpenflowDeploymentByocParametersEventTableList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParametersOutputReference.property.internalValue"></a>

```csharp
public OpenflowDeploymentByocParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocParameters">OpenflowDeploymentByocParameters</a>

---


### OpenflowDeploymentByocShowOutputList <a name="OpenflowDeploymentByocShowOutputList" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get"></a>

```csharp
private OpenflowDeploymentByocShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OpenflowDeploymentByocShowOutputOutputReference <a name="OpenflowDeploymentByocShowOutputOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.customIngressHostname">CustomIngressHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.usePrivateLink">UsePrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.useUserAuthOverPrivateLink">UseUserAuthOverPrivateLink</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.vpcType">VpcType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput">OpenflowDeploymentByocShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CustomIngressHostname`<sup>Required</sup> <a name="CustomIngressHostname" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.customIngressHostname"></a>

```csharp
public string CustomIngressHostname { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `UsePrivateLink`<sup>Required</sup> <a name="UsePrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.usePrivateLink"></a>

```csharp
public IResolvable UsePrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UseUserAuthOverPrivateLink`<sup>Required</sup> <a name="UseUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```csharp
public IResolvable UseUserAuthOverPrivateLink { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VpcType`<sup>Required</sup> <a name="VpcType" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.vpcType"></a>

```csharp
public string VpcType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutputOutputReference.property.internalValue"></a>

```csharp
public OpenflowDeploymentByocShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocShowOutput">OpenflowDeploymentByocShowOutput</a>

---


### OpenflowDeploymentByocTimeoutsOutputReference <a name="OpenflowDeploymentByocTimeoutsOutputReference" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new OpenflowDeploymentByocTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OpenflowDeploymentByocTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.openflowDeploymentByoc.OpenflowDeploymentByocTimeouts">OpenflowDeploymentByocTimeouts</a>

---



