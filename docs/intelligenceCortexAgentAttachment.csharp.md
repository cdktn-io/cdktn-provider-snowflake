# `intelligenceCortexAgentAttachment` Submodule <a name="`intelligenceCortexAgentAttachment` Submodule" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntelligenceCortexAgentAttachment <a name="IntelligenceCortexAgentAttachment" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment snowflake_intelligence_cortex_agent_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IntelligenceCortexAgentAttachment(Construct Scope, string Id, IntelligenceCortexAgentAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig">IntelligenceCortexAgentAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig">IntelligenceCortexAgentAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(IntelligenceCortexAgentAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntelligenceCortexAgentAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IntelligenceCortexAgentAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IntelligenceCortexAgentAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IntelligenceCortexAgentAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IntelligenceCortexAgentAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IntelligenceCortexAgentAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntelligenceCortexAgentAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntelligenceCortexAgentAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IntelligenceCortexAgentAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference">IntelligenceCortexAgentAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentNameInput">CortexAgentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceNameInput">SnowflakeIntelligenceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentName">CortexAgentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceName">SnowflakeIntelligenceName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeouts"></a>

```csharp
public IntelligenceCortexAgentAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference">IntelligenceCortexAgentAttachmentTimeoutsOutputReference</a>

---

##### `CortexAgentNameInput`<sup>Optional</sup> <a name="CortexAgentNameInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentNameInput"></a>

```csharp
public string CortexAgentNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SnowflakeIntelligenceNameInput`<sup>Optional</sup> <a name="SnowflakeIntelligenceNameInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceNameInput"></a>

```csharp
public string SnowflakeIntelligenceNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|IntelligenceCortexAgentAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---

##### `CortexAgentName`<sup>Required</sup> <a name="CortexAgentName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.cortexAgentName"></a>

```csharp
public string CortexAgentName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SnowflakeIntelligenceName`<sup>Required</sup> <a name="SnowflakeIntelligenceName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.snowflakeIntelligenceName"></a>

```csharp
public string SnowflakeIntelligenceName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntelligenceCortexAgentAttachmentConfig <a name="IntelligenceCortexAgentAttachmentConfig" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IntelligenceCortexAgentAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CortexAgentName,
    string SnowflakeIntelligenceName,
    string Id = null,
    IntelligenceCortexAgentAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.cortexAgentName">CortexAgentName</a></code> | <code>string</code> | Fully qualified name of the Cortex agent to attach. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.snowflakeIntelligenceName">SnowflakeIntelligenceName</a></code> | <code>string</code> | Fully qualified name of the Snowflake Intelligence object to attach the agent to. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CortexAgentName`<sup>Required</sup> <a name="CortexAgentName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.cortexAgentName"></a>

```csharp
public string CortexAgentName { get; set; }
```

- *Type:* string

Fully qualified name of the Cortex agent to attach.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#cortex_agent_name IntelligenceCortexAgentAttachment#cortex_agent_name}

---

##### `SnowflakeIntelligenceName`<sup>Required</sup> <a name="SnowflakeIntelligenceName" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.snowflakeIntelligenceName"></a>

```csharp
public string SnowflakeIntelligenceName { get; set; }
```

- *Type:* string

Fully qualified name of the Snowflake Intelligence object to attach the agent to.

The account default object is SNOWFLAKE_INTELLIGENCE_OBJECT_DEFAULT. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using pipes (`|`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#snowflake_intelligence_name IntelligenceCortexAgentAttachment#snowflake_intelligence_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#id IntelligenceCortexAgentAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentConfig.property.timeouts"></a>

```csharp
public IntelligenceCortexAgentAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#timeouts IntelligenceCortexAgentAttachment#timeouts}

---

### IntelligenceCortexAgentAttachmentTimeouts <a name="IntelligenceCortexAgentAttachmentTimeouts" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IntelligenceCortexAgentAttachmentTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#create IntelligenceCortexAgentAttachment#create}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#delete IntelligenceCortexAgentAttachment#delete}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#read IntelligenceCortexAgentAttachment#read}. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#update IntelligenceCortexAgentAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#create IntelligenceCortexAgentAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#delete IntelligenceCortexAgentAttachment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#read IntelligenceCortexAgentAttachment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.22.1/docs/resources/intelligence_cortex_agent_attachment#update IntelligenceCortexAgentAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntelligenceCortexAgentAttachmentTimeoutsOutputReference <a name="IntelligenceCortexAgentAttachmentTimeoutsOutputReference" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IntelligenceCortexAgentAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IntelligenceCortexAgentAttachmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.intelligenceCortexAgentAttachment.IntelligenceCortexAgentAttachmentTimeouts">IntelligenceCortexAgentAttachmentTimeouts</a>

---



